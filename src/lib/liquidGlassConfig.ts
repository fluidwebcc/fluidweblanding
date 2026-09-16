/** Frosted glass — still see-through, just a light blur on the edges. */
export const FROSTED_BAR_GLASS = {
  blurAmount: 0.18,
  cornerRadius: 20,
  zRadius: 24,
  refraction: 0.48,
  chromAberration: 0.025,
  edgeHighlight: 0.1,
  fresnel: 0.85,
  shadowOpacity: 0.2,
  brightness: 0.04,
  opacity: 0.46,
  tintStrength: 0.04,
  saturation: 0.04,
  floating: false,
  button: false,
} as const;

/** Action pills — same idea, a bit tighter. */
export const REGULAR_BTN_GLASS = {
  blurAmount: 0.14,
  cornerRadius: 12,
  zRadius: 16,
  refraction: 0.42,
  chromAberration: 0.02,
  edgeHighlight: 0.08,
  fresnel: 0.8,
  shadowOpacity: 0.16,
  brightness: 0.04,
  opacity: 0.4,
  tintStrength: 0.03,
  button: true,
  floating: false,
} as const;
