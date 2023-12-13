import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls(camera, renderer.domElement);

const loader = new GLTFLoader();

loader.load("./TianCity.glb",function(gltf){
    scene.add(gltf.scene);
});

const light1 = new THREE.PointLight(0xffffff, 10000000);
light1.position.set(0,1000,0)
scene.add(light1)

const light = new THREE.AmbientLight(0xffffff);
scene.add(light);
camera.position.z = 5;
controls.update();

function animate() {
    requestAnimationFrame( animate );



    renderer.render( scene, camera );
}
animate();