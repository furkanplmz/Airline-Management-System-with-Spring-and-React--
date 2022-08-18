import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state={}
    }
    
    render() {
        return (
            <div>
                <footer className='footer'>
                    <span className='text-muted'>Staj Proje 2022 @Mustafa Furkan Pılamaz</span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;