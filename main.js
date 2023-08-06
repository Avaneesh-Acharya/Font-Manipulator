function setup() {
    canvas = createCanvas(630, 790)
    canvas.position(770, 100)
    video = createCapture(VIDEO)
    video.size(450, 450)
    PoseNet=ml5.poseNet(video, model_loaded())
    PoseNet.on('pose', got_poses)
}
function model_loaded() {
    console.log("Model is initialized")
}
function got_poses(results) {
    if (results.length>0) {
        console.log(results)
    }
}
function draw() {
    background("#999999")
}