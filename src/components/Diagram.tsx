import { useCallback, useEffect, useRef } from 'react'
import { Box } from '../Schema';

// interface AppProps {
//   children?: React.ReactNode; // best, accepts everything React can render
//   childrenElement: React.JSX.Element; // A single React element
//   style?: React.CSSProperties; // to pass through style props
// }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Diagram(props: any) {

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { schema } = props;

  const draw = useCallback((ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = '#000000';
    schema.boxes.forEach((e: Box) => {
      ctx.beginPath();
      ctx.rect(e.x, e.y, e.width, e.height);
      ctx.stroke();
    })
  }, [schema])

  useEffect(() => {
    const canvas = canvasRef.current!;

    // Set correct canvas size
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const context: CanvasRenderingContext2D = canvas.getContext('2d')!;
    let animationFrameId: number;

    const render = () => {
      draw(context);
      animationFrameId = window.requestAnimationFrame(render);
    }
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    }

  }, [draw])

  return (
    <canvas ref={canvasRef} {...props} />
  )
}