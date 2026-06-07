import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { C as Canvas, u as useFrame } from "../_libs/react-three__fiber.mjs";
import { F as Float, M as MeshDistortMaterial } from "../_libs/react-three__drei.mjs";
import "../_libs/three.mjs";
import "../_libs/zustand.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/scheduler.mjs";
import "../_libs/its-fine.mjs";
import "../_libs/react-use-measure.mjs";
import "../_libs/babel__runtime.mjs";
function HoloOrb() {
  const meshRef = reactExports.useRef(null);
  const matRef = reactExports.useRef(null);
  useFrame((state, dt) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += dt * 0.1;
    meshRef.current.rotation.y += dt * 0.15;
    if (matRef.current) {
      const hue = state.clock.elapsedTime * 0.04 % 1;
      matRef.current.color.setHSL(0.7 + Math.sin(hue * 6.28) * 0.08, 0.6, 0.6);
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Float, { speed: 1.2, rotationIntensity: 0.4, floatIntensity: 0.6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { ref: meshRef, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("icosahedronGeometry", { args: [1.5, 5] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      MeshDistortMaterial,
      {
        ref: matRef,
        color: "#9d8cff",
        distort: 0.38,
        speed: 1.6,
        roughness: 0.15,
        metalness: 0.9
      }
    )
  ] }) });
}
function Rings() {
  const g = reactExports.useRef(null);
  useFrame((_, dt) => {
    if (!g.current) return;
    g.current.rotation.x += dt * 0.05;
    g.current.rotation.z += dt * 0.03;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { ref: g, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { rotation: [Math.PI / 3, 0, 0], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("torusGeometry", { args: [2.2, 8e-3, 8, 128] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshBasicMaterial", { color: "#a78bfa", transparent: true, opacity: 0.35 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { rotation: [Math.PI / 5, Math.PI / 4, 0], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("torusGeometry", { args: [2.6, 6e-3, 8, 128] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshBasicMaterial", { color: "#38bdf8", transparent: true, opacity: 0.25 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { rotation: [0, Math.PI / 3, Math.PI / 6], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("torusGeometry", { args: [3, 5e-3, 8, 128] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshBasicMaterial", { color: "#67e8f9", transparent: true, opacity: 0.18 })
    ] })
  ] });
}
function Particles() {
  const ref = reactExports.useRef(null);
  const positions = reactExports.useMemo(() => {
    const arr = new Float32Array(1500 * 3);
    for (let i = 0; i < 1500; i++) {
      const r = 3 + Math.random() * 4;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(p) * Math.cos(t);
      arr[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      arr[i * 3 + 2] = r * Math.cos(p);
    }
    return arr;
  }, []);
  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.y += dt * 0.02;
    ref.current.rotation.x += dt * 0.01;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("points", { ref, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("bufferGeometry", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("bufferAttribute", { attach: "attributes-position", args: [positions, 3] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointsMaterial", { size: 0.014, color: "#c4b5fd", transparent: true, opacity: 0.7, sizeAttenuation: true })
  ] });
}
function Scene3D() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Canvas,
    {
      dpr: [1, 2],
      camera: { position: [0, 0, 5], fov: 50 },
      gl: { antialias: true, alpha: true },
      style: { background: "transparent" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.4 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("directionalLight", { position: [5, 5, 5], intensity: 0.9, color: "#a78bfa" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("directionalLight", { position: [-5, -3, -2], intensity: 0.5, color: "#67e8f9" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [0, 2, 3], intensity: 1.2, color: "#38bdf8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Particles, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Rings, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(HoloOrb, {})
      ]
    }
  );
}
export {
  Scene3D as default
};
