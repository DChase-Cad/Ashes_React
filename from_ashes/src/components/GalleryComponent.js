import React, { Component } from 'react'
import { GALLERY } from '../shared/GalleryItems';
import { Modal, ModalBody,ModalHeader } from 'reactstrap';
import GalleryCarousel from './GalleryCarousel';

export default class GalleryContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: GALLERY,
            showModal: false
        }
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            showModal: !this.state.showModal
        })
    }
    render() {
        const closeBtn = <button className="close" onClick={this.toggleModal}>&times;</button>;

        return (
            <>
                <div className="row row-content py-3 w-100 content">
                    <h1 className="text-center mx-auto my-4 font-weight-bold w-100">Image Gallery</h1>

                    {this.state.images.map((img, i) => {
                        return (
                            <div key={i + 1} className="col-12 col-sm-6 col-md-4 col-xl-3 mb-4 gal-img">
                                <img className="w-100 br-25 gal-img" src={img.src} alt={img.alt} onClick={this.toggleModal} ></img>
                            </div>
                        );
                    })}
                </div>
                <Modal
                    backdrop={true}
                    modal
                    isOpen={this.state.showModal}
                    toggle={this.toggleModal}
                >
                    <ModalHeader
                    className="mx-auto"
                    toggle={this.toggleModal}
                    close={closeBtn}
                    >From Ashes Image Gallery</ModalHeader>
                    <ModalBody
                        toggle={this.toggleModal}
                    >
                        <GalleryCarousel />
                    </ModalBody>
                </Modal>
            </>
        );
    }
}


