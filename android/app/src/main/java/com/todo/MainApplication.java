package com.todo;

import android.app.Application;

import com.facebook.react.ReactApplication;
<<<<<<< HEAD
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
=======
import com.oblador.vectoricons.VectorIconsPackage;
>>>>>>> 1ca1fa46d84992b84cd2cfe2c4ff79bcb737b4ff
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
<<<<<<< HEAD
            new RNGestureHandlerPackage()
=======
            new VectorIconsPackage()
>>>>>>> 1ca1fa46d84992b84cd2cfe2c4ff79bcb737b4ff
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
