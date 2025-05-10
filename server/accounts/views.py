from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.exceptions import PermissionDenied
from .models import CustomUser
from .serializers import CustomUserSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken

class CustomUserViewSet(viewsets.ModelViewSet):
    serializer_class = CustomUserSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        """
        This ensures that a user can only access their own account.
        """
        return CustomUser.objects.filter(id=self.request.user.id)
    
    def perform_destroy(self, instance):
        """
        Prevent users from deleting their own account.
        """
        if instance == self.request.user:
            raise PermissionDenied("You cannot delete your own account.")
        instance.delete()

    def update(self, request, *args, **kwargs):
        """
        Allow users to update their own account but not others.
        """
        if kwargs.get('pk') != str(request.user.id):
            raise PermissionDenied("You can only update your own account")
        


class RegisterView(APIView):
    permission_classes = [AllowAny]  # Allow everyone to register

    def post(self, request, *args, **kwargs):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({"message": "User created successfully."}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class UpdateView(APIView):
    permission_classes = [IsAuthenticated]  # Only authenticated users can update

    def get_object(self, user_id):
        try:
            return CustomUser.objects.get(id=user_id)
        except CustomUser.DoesNotExist:
            return None

    def put(self, request, *args, **kwargs):
        user_id = kwargs.get("pk")
        user = self.get_object(user_id)

        if user != request.user:
            raise PermissionDenied("You can only update your own account.")

        serializer = CustomUserSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "User updated successfully."}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class DeleteView(APIView):
    permission_classes = [IsAuthenticated]  # Only authenticated users can delete

    def get_object(self, user_id):
        try:
            return CustomUser.objects.get(id=user_id)
        except CustomUser.DoesNotExist:
            return None

    def delete(self, request, *args, **kwargs):
        user_id = kwargs.get("pk")
        user = self.get_object(user_id)

        if user != request.user:
            raise PermissionDenied("You can only delete your own account.")

        user.delete()
        return Response({"message": "User deleted successfully."}, status=status.HTTP_204_NO_CONTENT)

class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            # Blacklist the refresh token to invalidate it
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()  # Blacklist the refresh token
            
            return Response({"message": "Successfully logged out."}, status=200)
        except Exception as e:
            return Response({"message": "Invalid token."}, status=400)