import styled from 'styled-components'

export const SmallPie = styled.div/*<{deg: number}>*/`
  --p: 80;
  --b: 5px;
  --w: 40px;
  --c: #FFFFFFEE;
  position: absolute;
  right: 1em;
  top: 40%;
  transform: translate(0, -40%);
  display: inline-grid;
  margin: 5px;
  width: var(--w);
  place-content: center; // is it need?
  aspect-ratio: 1;
  animation: p 1s 0.5s both;
  @keyframes p {
    from {--p: 0}
  }
  :before, :after {
    content: '';
    position: absolute;
    border-radius: 50%;
  }
  // rounded first end
  :before {
    inset: 0;
    background: 
            radial-gradient(farthest-side, 
            var(--c)98%, #0000) top/var(--b) var(--b) no-repeat, 
            conic-gradient(var(--c) calc(var(--p)*1%), #0000 0);
    -webkit-mask: radial-gradient(farthest-side, #0000 calc(99% - var(--b)),#000 calc(100% - var(--b)));
    mask: radial-gradient(farthest-side, #0000 calc(99% - var(--b)),#000 calc(100% - var(--b)));
  }
  // rounded second end
  :after {
    inset: calc(50% - var(--b)/2);
    background: var(--c);
    transform: rotate(calc(var(--p)*3.6deg)) translateY(calc(50% - var(--w)/2));
  }
`