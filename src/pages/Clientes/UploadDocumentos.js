
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dropzone from 'react-dropzone';
import { toast } from 'react-toastify';
import { uniqueId } from 'lodash';
import filesize from 'filesize';

import FileList from '../../components/FileList';

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

import { ContainerModal, DropContainer, UploadMessage } from './styles';
import {
  uploadeDocumentoRequest
} from '../../store/modules/clientes/actions';

const UploadDocumentos = ({ open, setOpen, clienteId }) => {

  const [UploadRgFrente, setUploadRgFrente] = useState(false);
  const [UploadRgVerso, setUploadRgVerso] = useState(false);
  const [UploadComprResidencia, setUploadComprResidencia] = useState(false);
  const [UploadCompPagamento, setUploadCompPagamento] = useState(false);

  const dispatch = useDispatch();
  const progress = useSelector((state) => state.cliente.progress);

  useEffect(() => {
    if (!progress) {
      setOpen(progress);
    }
  }, [progress]);

  const handleUploadRgFrente = files => {

    const uploadedRgFrenteFiles = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null
    }))

    setUploadRgFrente({
      uploadedRgFrenteFiles: uploadedRgFrenteFiles
    });

  };

  const handleUploadRgVerso = files => {
    const uploadedRgVersoFiles = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null
    }))

    setUploadRgVerso({
      uploadedRgVersoFiles: uploadedRgVersoFiles
    });

  };

  const handleUploadCompResidencia = files => {
    const uploadedCompResidenciaFiles = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null
    }))

    setUploadComprResidencia({
      uploadedCompResidenciaFiles: uploadedCompResidenciaFiles
    });

  };

  const handleUploadCompPagamento = files => {
    const uploadedCompPagamentoFiles = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null
    }))

    setUploadCompPagamento({
      uploadedCompPagamentoFiles: uploadedCompPagamentoFiles
    });

  };

  const data = {
    verso_rg: UploadRgVerso.uploadedRgVersoFiles,
    frente_rg: UploadRgFrente.uploadedRgFrenteFiles,
    comprovante_residencia: UploadComprResidencia.uploadedCompResidenciaFiles,
    comprovante_pagamento: UploadCompPagamento.uploadedCompPagamentoFiles,
    user_id: clienteId
  }

  const uploadedArquivos = () => {
    if (
      data.frente_rg &&
      data.verso_rg &&
      data.comprovante_pagamento &&
      data.comprovante_residencia
    ) {
      const formData = new FormData();
      formData.append('verso_rg', UploadRgVerso.uploadedRgVersoFiles[0].file, 'verso_rg');
      formData.append('frente_rg', UploadRgFrente.uploadedRgFrenteFiles[0].file, 'frente_rg');
      formData.append('comprovante_pagamento', UploadCompPagamento.uploadedCompPagamentoFiles[0].file, 'comprovante_pagamento');
      formData.append('comprovante_residencia', UploadComprResidencia.uploadedCompResidenciaFiles[0].file, 'comprovante_residencia');
      formData.append('user_id', clienteId);
      dispatch(uploadeDocumentoRequest(formData));
    } else {
      toast.error('Ops! Só é permitido enviar todos documentos de uma vez.');
    }
  }

  return (
    <Modal isOpen={open}>
      <ModalHeader><strong>Documentos</strong></ModalHeader>
      <ContainerModal>
        {!progress ? (<ModalBody className="Mod-body">
          { !!UploadRgFrente.uploadedRgFrenteFiles ? (
            <FileList
              files={UploadRgFrente.uploadedRgFrenteFiles}
              imageRemove={ () => setUploadRgFrente(false) }
            />
          ) : (
            <Dropzone multiple={false} accept="image/*" onDropAccepted={handleUploadRgFrente}>
              { ({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                <DropContainer
                  { ...getRootProps() }
                  isDragActive={isDragActive}
                  isDragReject={isDragReject}
                >
                  <input { ...getInputProps() } />
                  <UploadMessage>Arraste e solte seu RG frente aqui...</UploadMessage>
                </DropContainer>
              ) }
            </Dropzone>
          )}

          { !!UploadRgVerso.uploadedRgVersoFiles ? (
            <FileList
              files={UploadRgVerso.uploadedRgVersoFiles}
              imageRemove={ () => setUploadRgVerso(false) }
            />
          ) : (
            <Dropzone multiple={false} accept="image/*" onDropAccepted={ handleUploadRgVerso }>
              { ({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                <DropContainer
                  { ...getRootProps() }
                  isDragActive={isDragActive}
                  isDragReject={isDragReject}
                >
                  <input { ...getInputProps() } />
                  <UploadMessage>Arraste e solte seu RG verso aqui...</UploadMessage>
                </DropContainer>
              ) }
            </Dropzone>
          )}
          { !!UploadComprResidencia.uploadedCompResidenciaFiles ? (
            <FileList
              files={UploadComprResidencia.uploadedCompResidenciaFiles}
              imageRemove={ () => setUploadComprResidencia(false) }
            />
          ) : (
            <Dropzone multiple={false} accept="image/*" onDropAccepted={handleUploadCompResidencia}>
              { ({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                <DropContainer
                  { ...getRootProps() }
                  isDragActive={isDragActive}
                  isDragReject={isDragReject}
                >
                  <input { ...getInputProps() } />
                  <UploadMessage>Arraste e solte seu Comprovante Residência aqui...</UploadMessage>
                </DropContainer>
              ) }
            </Dropzone>
          )}
          { !!UploadCompPagamento.uploadedCompPagamentoFiles ? (
            <FileList
              files={UploadCompPagamento.uploadedCompPagamentoFiles}
              imageRemove={ () => setUploadCompPagamento(false) }
            />
          ) : (
            <Dropzone multiple={false} accept="image/*" onDropAccepted={handleUploadCompPagamento}>
              { ({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                <DropContainer
                  { ...getRootProps() }
                  isDragActive={isDragActive}
                  isDragReject={isDragReject}
                >
                  <input { ...getInputProps() } />
                  <UploadMessage>Arraste e solte seu Comprovante Pagamento aqui...</UploadMessage>
                </DropContainer>
              ) }
            </Dropzone>
          )}
        </ModalBody>
        ) : (
          <ModalBody>
            <img
              width="100"
              height="100"
              src={require('../../assets/images/loaddin-ligth.gif')}
              alt="Carregando..."
            />
          </ModalBody>
        )}
      </ContainerModal>
      <ModalFooter>
        <Button color="primary" onClick={() => uploadedArquivos(data)}>
          Enviar
        </Button>
        <Button color="secondary" onClick={() => setOpen(false)}>
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default UploadDocumentos;
