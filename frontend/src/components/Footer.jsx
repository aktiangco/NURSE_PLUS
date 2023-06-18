import React from 'react';
import { Instagram, Facebook, Linkedin, Github } from "react-bootstrap-icons";


const Footer = () => {



    return (
        <div className='footer' style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
                <div style={{display: 'flex'}}>
                    <div style={{ padding: '10px' }}>     
                        <div>created by Allan Tiangco</div>
                    </div>
                    <div style={{ padding: '10px' }}>
                        <a style={{ color: 'white'}} href='https://www.linkedin.com/in/allan-kris-tiangco-057a78a0/'>
                            <Linkedin />
                        </a>
                    </div>
                    <div style={{ padding: '10px' }}>                    
                        <a style={{ color: 'white'}} href='https://github.com/aktiangco'>
                            <Github />
                        </a>
                    </div>
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