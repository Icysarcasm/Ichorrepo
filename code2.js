gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDTitletextObjects1= [];
gdjs.MenuCode.GDTitletextObjects2= [];
gdjs.MenuCode.GDSplashtextObjects1= [];
gdjs.MenuCode.GDSplashtextObjects2= [];
gdjs.MenuCode.GDPlayObjects1= [];
gdjs.MenuCode.GDPlayObjects2= [];
gdjs.MenuCode.GDExitObjects1= [];
gdjs.MenuCode.GDExitObjects2= [];
gdjs.MenuCode.GDSettingsObjects1= [];
gdjs.MenuCode.GDSettingsObjects2= [];
gdjs.MenuCode.GDRainObjects1= [];
gdjs.MenuCode.GDRainObjects2= [];
gdjs.MenuCode.GDRain2Objects1= [];
gdjs.MenuCode.GDRain2Objects2= [];
gdjs.MenuCode.GDRain3Objects1= [];
gdjs.MenuCode.GDRain3Objects2= [];
gdjs.MenuCode.GDNewTiledSpriteObjects1= [];
gdjs.MenuCode.GDNewTiledSpriteObjects2= [];


gdjs.MenuCode.asyncCallback24150684 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Templatekillhouse", false);
}gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.1), (runtimeScene) => (gdjs.MenuCode.asyncCallback24150684(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MenuCode.GDPlayObjects1);
gdjs.copyArray(runtimeScene.getObjects("Settings"), gdjs.MenuCode.GDSettingsObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(1, 4));
}{for(var i = 0, len = gdjs.MenuCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPlayObjects1[i].getBehavior("Tween").addObjectPositionTween2("playmove", 0, 224, "easeInOutQuad", 0.4, false);
}
}{for(var i = 0, len = gdjs.MenuCode.GDSettingsObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSettingsObjects1[i].getBehavior("Tween").addObjectPositionTween2("setmove", 0, 320, "easeInOutQuad", 0.5, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Splashtext"), gdjs.MenuCode.GDSplashtextObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDSplashtextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSplashtextObjects1[i].getBehavior("Text").setText("It only gets worse from here");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Splashtext"), gdjs.MenuCode.GDSplashtextObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDSplashtextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSplashtextObjects1[i].getBehavior("Text").setText("I hope you've got a good dry cleaner...");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Splashtext"), gdjs.MenuCode.GDSplashtextObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDSplashtextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSplashtextObjects1[i].getBehavior("Text").setText("Wood has more uses than you'd think...");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 4;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Splashtext"), gdjs.MenuCode.GDSplashtextObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDSplashtextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSplashtextObjects1[i].getBehavior("Text").setText("Holy Bloodshed Batman!");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MenuCode.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDPlayObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDPlayObjects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDPlayObjects1[k] = gdjs.MenuCode.GDPlayObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDPlayObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rain"), gdjs.MenuCode.GDRainObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDRainObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDRainObjects1[i].startEmission();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MenuCode.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDPlayObjects1.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDPlayObjects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDPlayObjects1[k] = gdjs.MenuCode.GDPlayObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDPlayObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rain"), gdjs.MenuCode.GDRainObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDRainObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDRainObjects1[i].stopEmission();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Settings"), gdjs.MenuCode.GDSettingsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDSettingsObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDSettingsObjects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDSettingsObjects1[k] = gdjs.MenuCode.GDSettingsObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDSettingsObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rain2"), gdjs.MenuCode.GDRain2Objects1);
{for(var i = 0, len = gdjs.MenuCode.GDRain2Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDRain2Objects1[i].startEmission();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Settings"), gdjs.MenuCode.GDSettingsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDSettingsObjects1.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDSettingsObjects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDSettingsObjects1[k] = gdjs.MenuCode.GDSettingsObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDSettingsObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rain2"), gdjs.MenuCode.GDRain2Objects1);
{for(var i = 0, len = gdjs.MenuCode.GDRain2Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDRain2Objects1[i].stopEmission();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MenuCode.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDPlayObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDPlayObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDPlayObjects1[k] = gdjs.MenuCode.GDPlayObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDPlayObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.MenuCode.GDNewTiledSpriteObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDNewTiledSpriteObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadeout", 1000000, "easeInOutCubic", 1, false);
}
}
{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Settings"), gdjs.MenuCode.GDSettingsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDSettingsObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDSettingsObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDSettingsObjects1[k] = gdjs.MenuCode.GDSettingsObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDSettingsObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Options", false);
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDTitletextObjects1.length = 0;
gdjs.MenuCode.GDTitletextObjects2.length = 0;
gdjs.MenuCode.GDSplashtextObjects1.length = 0;
gdjs.MenuCode.GDSplashtextObjects2.length = 0;
gdjs.MenuCode.GDPlayObjects1.length = 0;
gdjs.MenuCode.GDPlayObjects2.length = 0;
gdjs.MenuCode.GDExitObjects1.length = 0;
gdjs.MenuCode.GDExitObjects2.length = 0;
gdjs.MenuCode.GDSettingsObjects1.length = 0;
gdjs.MenuCode.GDSettingsObjects2.length = 0;
gdjs.MenuCode.GDRainObjects1.length = 0;
gdjs.MenuCode.GDRainObjects2.length = 0;
gdjs.MenuCode.GDRain2Objects1.length = 0;
gdjs.MenuCode.GDRain2Objects2.length = 0;
gdjs.MenuCode.GDRain3Objects1.length = 0;
gdjs.MenuCode.GDRain3Objects2.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects2.length = 0;

gdjs.MenuCode.eventsList1(runtimeScene);
gdjs.MenuCode.GDTitletextObjects1.length = 0;
gdjs.MenuCode.GDTitletextObjects2.length = 0;
gdjs.MenuCode.GDSplashtextObjects1.length = 0;
gdjs.MenuCode.GDSplashtextObjects2.length = 0;
gdjs.MenuCode.GDPlayObjects1.length = 0;
gdjs.MenuCode.GDPlayObjects2.length = 0;
gdjs.MenuCode.GDExitObjects1.length = 0;
gdjs.MenuCode.GDExitObjects2.length = 0;
gdjs.MenuCode.GDSettingsObjects1.length = 0;
gdjs.MenuCode.GDSettingsObjects2.length = 0;
gdjs.MenuCode.GDRainObjects1.length = 0;
gdjs.MenuCode.GDRainObjects2.length = 0;
gdjs.MenuCode.GDRain2Objects1.length = 0;
gdjs.MenuCode.GDRain2Objects2.length = 0;
gdjs.MenuCode.GDRain3Objects1.length = 0;
gdjs.MenuCode.GDRain3Objects2.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects2.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
