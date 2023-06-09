particlesJS('particles-js', {
  canvas: {
    color_hex_bg: '#15414e',
    opacity: 1
  },
  particles: {
    color: '#fff',
    shape: 'circle',
    opacity: 1,
    size: 2.5,
    size_random: true,
    nb: 200,
    line_linked: {
      enable_auto: true,
      distance: 100,
      color: '#fff',
      opacity: 1,
      width: 1,
      condensed_mode: {
        enable: true,
        rotateX: 65000,
        rotateY: 65000
      }
    },
    anim: {
      enable: true,
      speed: 1
    },
    array: []
  },
  interactivity: {
    enable: true,
    mouse: {
      distance: 100
    },
    detect_on: 'canvas',
    mode: 'grab'
  },
  retina_detect: false,
  fn: {
    vendors: {
      interactivity: {}
    }
  }
});
