package com.investec;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import android.os.Build;

public class DeviceModule extends ReactContextBaseJavaModule {
    
   public DeviceModule(ReactApplicationContext reactContext) {
       super(reactContext);
   }
   
   @Override
   public String getName() {
       return "Device";
   }
   
   @ReactMethod
   public void getDeviceName(Callback cb) {
       try{
           cb.invoke(null, Build.MODEL);
       } catch (Exception e){
           cb.invoke(e.toString(), null);
       }
   }

    @ReactMethod
    public void isEmulator(Callback cb) {
        try{
            cb.invoke(
                null, 
                Build.FINGERPRINT.startsWith("generic")
                || Build.FINGERPRINT.startsWith("unknown")
                || Build.MODEL.contains("google_sdk")
                || Build.MODEL.contains("Emulator")
                || Build.MODEL.contains("Android SDK built for x86")
                || Build.MANUFACTURER.contains("Genymotion")
                || (Build.BRAND.startsWith("generic") && Build.DEVICE.startsWith("generic"))
                || "google_sdk".equals(Build.PRODUCT)
            );
       } catch (Exception e){
           cb.invoke(e.toString(), null);
       }       
    }
}