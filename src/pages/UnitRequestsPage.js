import { Helmet } from 'react-helmet-async';
// @mui
import { Stack, Container, Typography, styled, Button } from '@mui/material';
import { withScriptjs, GoogleMap, Marker, withGoogleMap } from 'react-google-maps';

// components
import t from '../utils/i18n';
import Iconify from '../components/iconify';
import SideBar from '../components/side-bar';
// sections
// mock

const MyMapComponent = withScriptjs(
  withGoogleMap(({ lat, lng }) => (
    <GoogleMap defaultZoom={16} defaultCenter={{ lat, lng }}>
      <Marker position={{ lat, lng }} />
    </GoogleMap>
  ))
);

const request = {
  ambulanceNeeded: 'true',
  fireTrackNeeded: 'true',
  latitude: '0000',
  longitude: '0000',
  initiator: {
    nationalId: '123456789',
    firstName: 'محمد',
    lastName: 'علي',
    phoneNumber: '962796061133',
  },
};

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
const RenderIcons = () => {
  return (
    <>
      <div
        style={{
          width: 35,
          height: 35,
          borderRadius: '50%',
          border: 'solid 1px rgba(255, 99, 71, 0.4)',
          animation: 'flashingImportant 1s infinite',
          boxShadow: '0 0 30px rgba(0,0,0,0.05)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Iconify
          icon="mdi:medical-bag"
          sx={{
            width: 25,
            height: 25,
            opacity: 0.6,
          }}
        />
      </div>
      <div
        style={{
          width: 35,
          height: 35,
          borderRadius: '50%',
          border: 'solid 1px rgba(255, 99, 71, 0.4)',
          boxShadow: '0 0 30px rgba(0,0,0,0.05)',
          display: 'flex',
          animation: 'flashingImportant 1s infinite',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Iconify
          icon="mdi:fire"
          sx={{
            width: 25,
            height: 25,
            opacity: 0.6,
          }}
        />
      </div>
    </>
  );
};
export default function UnitRequestsPage() {
  return (
    <>
      <Helmet>
        <title> {t('unitRequestsPageTitle')} </title>
      </Helmet>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            {t('unitRequestsHeading')}
          </Typography>
        </Stack>
        <div
          style={{
            display: 'flex',
            gap: 20,
          }}
        >
          <SideBar data={[{ user: request.initiator }]} onClick={() => {}} renderIconsSection={RenderIcons} />
          <div
            style={{
              flexGrow: 1,
              height: '75vh',
              borderRadius: '20px',
              overflow: 'hidden',
              backgroundColor: 'rgba(0,0,0,0.1)',
              boxShadow: '0 0 30px rgba(0,0,0,0.05)',
              position: 'relative',
            }}
          >
            <MyMapComponent
              {...{ lat: 31.901251, lng: 35.859108 }}
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAWjLExlTVTKhgrMa5lf6IgQ0euNesoyvs"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
            <div
              style={{
                display: 'flex',
                position: 'absolute',
                paddingBottom: 20,
                paddingTop: 20,
                bottom: 0,
                justifyContent: 'center',
                width: '70%',
                left: 0,
                right: 0,
                margin: 'auto',
                backdropFilter: 'blur(4px)',
                backgroundColor: 'rgba(255,255,255,0.2)',
                gap: 10,
                borderRadius: 20,
              }}
            >
              <Button
                variant="contained"
                style={{
                  backgroundColor: '#4caf50',
                  color: '#fff',
                }}
              >
                {t('HasBeenAssigned')}
              </Button>
              <Button
                variant="contained"
                style={{
                  backgroundColor: '#f44336',
                  color: '#fff',
                }}
              >
                {t('cancel')}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
