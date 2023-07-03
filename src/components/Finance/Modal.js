import React from 'react';
import Modal from 'react-modal';
import Button from '../components/Button';
import TextContent from '../components/TextContent';

// Set the root element of the modal
Modal.setAppElement('#root');

class CustomModal extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        switch (this.props.type) {
            case 'login':
                return (
                    <Modal
                        className="modal"
                        isOpen={this.props.isOpen}
                        onRequestClose={this.props.onClose}
                    >
                        <TextContent type='title' content="LOGIN REALIZADO COM SUCESSO, BEM VINDO"></TextContent>

                        <Button action='refreshWindow' value='ÍNICIO'></Button>
                    </Modal>
                );

            case 'updateItem':
                return (
                    <Modal
                        className="modal"
                        isOpen={this.props.isOpen}
                        onRequestClose={this.props.onClose}
                    >
                        <TextContent type='title' content="ATUALIZADO COM SUCESSO"></TextContent>

                        <Button action='refreshWindow' value='OK'></Button>
                    </Modal>
                );
                
                case 'error':
                    return (
                        <Modal
                            className="modal"
                            isOpen={this.props.isOpen}
                            onRequestClose={this.props.onClose}
                        >
                            <TextContent type='title' content="Ooops, algo deu errado"></TextContent>
                            <TextContent content={this.props.message}></TextContent>

                            <Button action='refreshWindow' value='TENTAR DE NOVO'></Button>
                        </Modal>
                    );
            case 'initial':
                return (
                    <Modal
                        className="modal"
                        isOpen={this.props.isOpen}
                        onRequestClose={this.props.onClose}
                    >
                        <div className="button-close-modal"
                        >
                            <button onClick={this.props.onClose}>X</button>
                        </div>
                        <TextContent type='title' content="BEM-VINDO"></TextContent>

                        <TextContent content="OBJETIVO: "></TextContent>

                        <TextContent
                            type='paragraph'
                            content={`
                             - AUXILIAR O USUÁRIO EM SUA VIDA FINANCEIRA, ATRAVÉS DA VISUALIZAÇÃO DE SUAS 
                             FINANÇAS MENSAIS, SOMAS, E CONTROLE FINANCEIRO  
                             `}
                        ></TextContent>

                        <TextContent
                            type='paragraph'
                            content={`
                             - TAMBÉM CONTAMOS COM O SISTEMA DE TAREFAS ( EM TESTE) 
                             `}
                        ></TextContent>

                        <TextContent content="FUNCIONALIDADES: "></TextContent>

                        <TextContent type='paragraph' content="- CADASTRO DE FINANÇAS"></TextContent>
                        <TextContent type='paragraph' content="- EDIÇÃO DE FINANÇAS"></TextContent>

                        <TextContent type='paragraph' content="- CADASTRO DE METAS"></TextContent>
                        <TextContent type='paragraph' content="- EDIÇÃO DE METAS"></TextContent>


                        <button onClick={this.props.onClose}>IR AO SITE</button>
                    </Modal>
                );


            case 'logout':
                return (
                    <Modal
                        className="modal"
                        isOpen={this.props.isOpen}
                        onRequestClose={this.props.onClose}
                    >
                        <TextContent type='title' content='ATÉ MAIS'></TextContent>
                        <Button action='refreshWindow' value='ÍNICIO'></Button>
                    </Modal>
                );

            case 'loading':
                return (
                    <Modal
                        className="modal"
                        isOpen={this.props.isOpen}
                        onRequestClose={this.props.onClose}
                    >
                        <TextContent type='title' content='CARREGANDO....'></TextContent>

                    </Modal>
                )
            default:
                return (
                    <Modal
                        className="modal"
                        isOpen={this.props.isOpen}
                        onRequestClose={this.props.onClose}
                    >
                        <TextContent type='title' content="Oops, erro interno"></TextContent>
                        <Button action='refreshWindow' value='Go'></Button>
                    </Modal>
                );
                break;
        };
    }
}

export default CustomModal;