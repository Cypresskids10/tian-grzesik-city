import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'
import {GLTFLoader} from 'three/addon/loaders/GLTFLoader'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls(camera, renderer.domElement);

const loader = new GLTFLoader();

const geometry = new THREE.BoxGeometry( 10, 10, 10 );
const material = new THREE.MeshLambertMaterial( { color:0x0000ff} );
const cube = new THREE. Mesh( geometry, material );
scene.add( cube );
const geometry1 = new THREE.BoxGeometry( 10, 10, 10 );
const material1 = new THREE.MeshLambertMaterial( { color:0x0000ff} );
const cube1 = new THREE. Mesh( geometry1, material1 );
cube.position.x = 30
cube1.position.x = -30
scene.add( cube1 );

const light = new THREE.PointLight(0xffffff, 10000);
scene.add(light)

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

loader.load("./pumpkin.gltf",function(gltf){
    scene.add(gltf.scene)
});

camera.position.z = 40;

function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;

    cube1.rotation.x += 0.1;
    cube1.rotation.y += 0.1;
    renderer.render( scene, camera );
}
animate();
