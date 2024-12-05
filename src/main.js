import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

/**
 * Scene
 */
const scene = new THREE.Scene();

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.z = 5;


/**
 * Size of window
 */
const sizes={
  width:window.innerWidth,
  height:window.innerHeight
}


/**
 * Resize handler
 */
window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
});


/**
 * Renderer
 */
const canvasEl=document.querySelector('canvas');

const renderer = new THREE.WebGLRenderer({
  canvas:canvasEl,
  antialias:true
});
renderer.setSize(sizes.width, sizes.height);



/**
 * Orbit controls
 */
const controls = new OrbitControls(camera, renderer.domElement);


/**
 * Cube
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);




/**
 * Animate function
 */

renderer.setAnimationLoop(animate);

function animate() {
  cube.rotation.y+=0.01
  controls.update();
  renderer.render(scene, camera);
}
