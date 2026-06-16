import { useMemo } from 'react';
import Particles, { ParticlesProvider, useParticlesProvider } from '@tsparticles/react';
import { loadLinksPreset } from '@tsparticles/preset-links';
import type { Engine, ISourceOptions } from '@tsparticles/engine';
import { useTheme } from '../contexts/ThemeContext';

const PALETTE = {
  light: { dot: '#133A3E', line: '#133A3E', dotOpacity: .6, linkOpacity: 0.22, },
  dark: { dot: '#6DA4A3', line: '#C4A030', dotOpacity: 0.6, linkOpacity: 0.22, },
};

async function initEngine(engine: Engine) {
  await loadLinksPreset(engine);
}

function ParticlesCanvas() {
  const { loaded } = useParticlesProvider();
  const { theme } = useTheme();

  const options: ISourceOptions = useMemo(() => {
    const colors = PALETTE[theme];
    return {
      preset: 'links',
      background: { color: 'transparent' },
      fpsLimit: 60,
      particles: {
        number: { value: 70 },
        paint: {
          fill: { color: { value: colors.dot }, opacity: colors.dotOpacity },
        },
        links: { color: colors.line, distance: 130, opacity: colors.linkOpacity },
        move: { speed: 0.6 },
        size: { value: 2 },
      },
      detectRetina: true,
    };
  }, [theme]);

  if (!loaded) return null;

  return <Particles id="tsparticles" className="particles-bg" options={options} />;
}

export function ParticlesBackground() {
  return (
    <ParticlesProvider init={initEngine}>
      <ParticlesCanvas />
    </ParticlesProvider>
  );
}
