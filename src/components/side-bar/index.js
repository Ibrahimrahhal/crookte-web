import { Helmet } from 'react-helmet-async';
// @mui
import { Stack, Container, Typography, styled, Button } from '@mui/material';

// components

const CardCustom = styled('div')(({ theme }) => ({
  width: '100%',
  padding: '20px 10px',
  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: 'dashed 1px rgba(0,0,0,0.2)',
  userSelect: 'none',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: '#f5f5f5',
  },
}));

export default function SideBar(props) {
  const { data } = props;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 300,
        height: '75vh',
        border: 'dashed 1px rgba(0,0,0,0.2)',
        borderRadius: '20px 2px 2px 20px',
        boxShadow: '0 0 30px rgba(0,0,0,0.03)',
        overflow: 'hidden',
        overflowY: 'auto',
      }}
    >
      {data.map((dataItem) => {
        const { user } = dataItem;
        return (
          <CardCustom key={user.id} onClick={() => props.onClick(user.id)}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography
                variant="p"
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                }}
              >
                {user.firstName} {user.lastName}
              </Typography>
              <Typography
                variant="p"
                gutterBottom
                sx={{
                  fontWeight: 'light',
                  fontSize: '0.8rem',
                  opacity: 0.6,
                }}
              >
                {user.nationalId}
              </Typography>
              <Typography
                variant="p"
                gutterBottom
                sx={{
                  fontWeight: 'light',
                  fontSize: '0.8rem',
                  opacity: 0.6,
                }}
              >
                {user.phoneNumber}
              </Typography>
            </div>
            <div
              style={{
                display: 'flex',
                gap: 10,
                alignItems: 'center',
              }}
            >
              {props.renderIconsSection(dataItem)}
            </div>
          </CardCustom>
        );
      })}
    </div>
  );
}
