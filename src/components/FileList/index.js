import React, { useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink, MdDeleteForever } from 'react-icons/md';

import { Container, FileInfo, Preview } from './styles';

const FileList = ({ files, imageRemove }) => {

  return (
    <Container>
      {files.map((uploadedFile, Index) => (
        <li key={Index}>
          <FileInfo>
            <Preview src={uploadedFile.preview} />
              <div>
                <strong>{ uploadedFile.name }</strong>
                <span>
                  { uploadedFile.readableSize }{ "" }
                  {!!uploadedFile.url && (
                    <button onClick={ () => {}}>Excluir</button>
                  )}
                </span>
              </div>
          </FileInfo>

          <div>
            {/* {!uploadedFile.uploaded && !uploadedFile.error && (
              <CircularProgressbar styles={{
                root: { width: 24},
                path: { stroker: '#7159c1'}
                }}
                strokeWidth={10}
                value={uploadedFile.progress}
              />
            )} */}
            {uploadedFile.url && (
              <a
              href="storage/imagens/documentos/15/6/11/comprovante_pagamento.jpeg"
              target="_blank"
              rel="noopener noreferrer"
              >
                <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
              </a>
            )}
            {/* <MdCheckCircle size={24} color="#4F4F4E" /> */}
            {/* <Button color="secondary" onClick={}> */}
              <MdDeleteForever size={24} onClick={() => imageRemove(uploadedFile.id)} color="#e57878" />
          </div>
        </li>
      ))}
    </Container>
  )
};

export default FileList;
