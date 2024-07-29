import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Envie } from '../../assets/svg/envie';
import { Primary } from '../../components/Botao/PrimaryButton';
import { Box, Typography, TextField } from '@mui/material';
import backgroundImage from '../../assets/img/Email.png';

const OtherPage = () =>{
	const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const templateParams = {
            to_name: formData.email, 
            from_name: formData.nome,
            message: formData.mensagem
        };

        emailjs.send('service_yxexx38', 'template_a7decfo', templateParams, 'plHlW7AukEn4qVbIz')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });

        setFormData({
            nome: '',
            email: '',
            mensagem: ''
        });
    };



    return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-around',
				flexDirection: 'column',
				alignItems: 'center',
				width: '100%',
				minHeight: '100%', 
				backgroundImage: `url(${backgroundImage})`,  
				backgroundPosition: 'bottom',
				backgorundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				margin: 0,
				padding: 0,
				color: '#fff',
				gap: 3,
				p: 1,
			}}
		>
			 	<Box sx={{
					width:'80%',
					padding:{xs:'0.8rem 1rem', md:'1rem 1.5rem'},
					background: '#0B0A0750',
					borderRadius: '99px',
					display: 'flex',
					justifyContent: 'end',
					flexDirection: 'column',
					alignItems: {xs:'center', md:'end'},
				}}> 
						<Box 
						  onClick={() => window.open('http://surl.li/rvmicc', '_blank')}
							sx={{
								width: '2rem',
								aspectRatio: 1/1,
								transition: 'all 0.2s ease-in-out',
								cursor:'pointer',
								'&:hover':{
										transform: 'scale(1.1)'
								}, 
							}}>
						<svg width="100%"  viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="20" cy="20" r="20" fill="#E6E8E6"/>
						<path d="M27 12.9101C26.0832 11.984 24.9912 11.2497 23.7876 10.7501C22.5841 10.2505 21.2931 9.99552 19.99 10.0001C14.53 10.0001 10.08 14.4501 10.08 19.9101C10.08 21.6601 10.54 23.3601 11.4 24.8601L10 30.0001L15.25 28.6201C16.7 29.4101 18.33 29.8301 19.99 29.8301C25.45 29.8301 29.9 25.3801 29.9 19.9201C29.9 17.2701 28.87 14.7801 27 12.9101ZM19.99 28.1501C18.51 28.1501 17.06 27.7501 15.79 27.0001L15.49 26.8201L12.37 27.6401L13.2 24.6001L13 24.2901C12.1777 22.977 11.7411 21.4593 11.74 19.9101C11.74 15.3701 15.44 11.6701 19.98 11.6701C22.18 11.6701 24.25 12.5301 25.8 14.0901C26.5675 14.854 27.1757 15.7627 27.5894 16.7635C28.0031 17.7642 28.214 18.8372 28.21 19.9201C28.23 24.4601 24.53 28.1501 19.99 28.1501ZM24.51 21.9901C24.26 21.8701 23.04 21.2701 22.82 21.1801C22.59 21.1001 22.43 21.0601 22.26 21.3001C22.09 21.5501 21.62 22.1101 21.48 22.2701C21.34 22.4401 21.19 22.4601 20.94 22.3301C20.69 22.2101 19.89 21.9401 18.95 21.1001C18.21 20.4401 17.72 19.6301 17.57 19.3801C17.43 19.1301 17.55 19.0001 17.68 18.8701C17.79 18.7601 17.93 18.5801 18.05 18.4401C18.17 18.3001 18.22 18.1901 18.3 18.0301C18.38 17.8601 18.34 17.7201 18.28 17.6001C18.22 17.4801 17.72 16.2601 17.52 15.7601C17.32 15.2801 17.11 15.3401 16.96 15.3301H16.48C16.31 15.3301 16.05 15.3901 15.82 15.6401C15.6 15.8901 14.96 16.4901 14.96 17.7101C14.96 18.9301 15.85 20.1101 15.97 20.2701C16.09 20.4401 17.72 22.9401 20.2 24.0101C20.79 24.2701 21.25 24.4201 21.61 24.5301C22.2 24.7201 22.74 24.6901 23.17 24.6301C23.65 24.5601 24.64 24.0301 24.84 23.4501C25.05 22.8701 25.05 22.3801 24.98 22.2701C24.91 22.1601 24.76 22.1101 24.51 21.9901Z" fill="#F46036"/>
						</svg>
					</Box>
				</Box>
				<Box sx={{
					width:{xs:'80%', md: '30%'},
					padding:{xs:'1rem 2rem', md:'2rem 4rem'},
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center', 
					background: '#0B0A0750',
					borderRadius: '15px',
				}}> 
					<Box sx={{
						width: { xs:'50%', md:'70%'},
						}}>
						<Envie/> 
					</Box>
					<form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column',   }}>
					<TextField
                        id="nome"
                        label="Nome"
                        variant="outlined"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        id="email"
                        label="Email"
                        variant="outlined"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        id="mensagem"
                        label="Mensagem"
                        variant="outlined"
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        multiline 
                    />
                    <Primary type="submit">
                        Enviar
                    </Primary>
                </form>
				</Box>
			 	<Box sx={{
					width:'80%',
					padding:{xs:'0.8rem 1rem', md:'1.5rem 2.5rem'},
					background: '#0B0A0750',
					borderRadius: '99px',
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center',
				}}>
					<Typography variant='p' color={'#FFF'} sx={{
									fontSize: {xs: 10, sm: 12, md: 14, lg: 16},
									textAlign:'center'
								}}>
						© Todos direitos reservados para Maria Vitória Machado
					</Typography>
				</Box>
		</Box>
    );
}

export default OtherPage
