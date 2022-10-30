import styled, { css } from "styled-components";

const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

export const ContainerModal = styled.div`
    background: #C8C7E9;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    .Mod-body {
      padding-bottom: 0;
    }
`;
export const ContainerImagem = styled.div`
   width: 100%;flex-direction: row;align-items: center;justify-content: center;display: flex;
`;

export const DropContainer = styled.div.attrs({
  ClassName: "dropzone"
})`
  border: 2px dashed #ddd;
  border-radius: 4px;
  cursor: pointer;
  background: #fff;
  transition: height 0.2s ease;
  color:#64666F;
  margin-bottom: 20px;
  padding: 10px;

  ${props => props.isDragActive && dragActive};
  ${props => props.isDragReject && dragReject};
`;

const messageColors = {
  default: '#999',
  error: '#e57878',
  success: '#78e5d5',
}

export const UploadMessage = styled.p`
  display: flex;
  color: ${props => messageColors[props.type || 'defaul']};
  justify-content: center;
  align-items: center;
  font-weight: 700;
  margin-bottom: 0rem;
`;
