package com.example.cw.practice.practice.androidjscore;

import org.liquidplayer.webkit.javascriptcore.JSContext;
import org.liquidplayer.webkit.javascriptcore.JSValue;

/**
 * Created by cw on 2017/5/2.
 */

public class AndroidJsCoreTest {

    public static void main(String[] args){
        JSContext jsContext = new JSContext();
        jsContext.property("a", "5");
        JSValue jsValue = jsContext.property("a");
    }
}