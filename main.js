mustacheX = 0;
mustacheY = 0;

function preload() {
mustache = loadImage("https://i.postimg.cc/FKJCfMrN/moustache-PNG18.png")
}

function setup() {
    canvas = createCanvas(300, 300)
    canvas.center();
    video = createCapture(VIDEO)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}

function draw() {
    image(video, 0, 0, 300, 300)
    image(mustache, mustacheX, mustacheY, 70, 30)
}

function take_snapshot() {
    save("mustache.png")
}

function modelLoaded() {
    console.log("Model has been loaded")
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results)
        mustacheX = results[0].pose.nose.x-180;
        mustacheY = results[0].pose.nose.y-110;
        console.log("nose x = " + results[0].pose.nose.x)
        console.log("nose y = " + results[0].pose.nose.y)
    }
}