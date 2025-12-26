
import { Camera } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';

export class PermissionManager {
  async requestCameraPermission() {
    const permission = await Camera.requestPermissions();
    return permission.camera === 'granted';
  }
  
  async requestLocationPermission() {
    const permission = await Geolocation.requestPermissions();
    return permission.location === 'granted';
  }
}