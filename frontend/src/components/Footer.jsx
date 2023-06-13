import React from 'react';
import { Instagram, Facebook, Linkedin } from "react-bootstrap-icons";


const Footer = () => {



    return (
        <div className='footer'>
            <div>
                <div style={{ padding: '10px'}}>
                    created by Allan Tiangco
                </div>
            </div>
            <div>
                <div style={{ padding: '10px'}}>
                    © {new Date().getFullYear()} Nurse Plus. All rights reserved.
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{ padding: '10px'}}>
                    <Instagram />
                </div>
                <div style={{ padding: '10px' }}>                    
                    <Facebook />
                </div>
                <div style={{ padding: '10px' }}>                    
                    <Linkedin />
                </div>
            </div>
            
        </div>
    );
  };
  
  export default Footer;