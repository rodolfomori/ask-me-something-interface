import styled from 'styled-components'

export const Container = styled.div`
  /* font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, */
  /* segoe ui, arial, sans-serif; */
  background: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: default;
  background: inherit;
  overflow: hidden;

  .transitions-item {
    overflow: hidden;
    width: 100%;
    color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 5em;
    font-weight: 800;
    text-transform: uppercase;
    will-change: transform, opacity, height;
    white-space: nowrap;
    cursor: pointer;
    line-height: 80px;
  }
`
