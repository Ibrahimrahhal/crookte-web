import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
// @mui
import {
  Stack,
  Container,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  Checkbox,
  Button,
} from '@mui/material';
import { ReactPhotoCollage } from 'react-photo-collage';
import { withScriptjs, GoogleMap, Marker, withGoogleMap } from 'react-google-maps';
import Iconify from '../components/iconify';

// components
import t from '../utils/i18n';
import SideBar from '../components/side-bar';

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

const MyMapComponent = withScriptjs(
  withGoogleMap(({ lat, lng }) => (
    <GoogleMap defaultZoom={16} defaultCenter={{ lat, lng }}>
      <Marker position={{ lat, lng }} />
    </GoogleMap>
  ))
);
const setting = {
  width: '100%',
  height: ['250px', '170px'],
  layout: [1, 4],
  photos: [
    {
      source:
        'https://images.unsplash.com/photo-1517088455889-bfa75135412c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5548929376f93d8b1b7a21097df03bd&auto=format&fit=crop&w=749&q=80',
    },
    {
      source:
        'https://images.unsplash.com/photo-1526656892012-7b336603ed46?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=31c8e58b58c25dfcc18452ed29b52951&auto=format&fit=crop&w=334&q=80',
    },
    {
      source:
        'https://images.unsplash.com/photo-1521024221340-efe7d7fa239b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9ad8a99d809d3fa3a9e8dff3ecc81878&auto=format&fit=crop&w=750&q=80',
    },
    {
      source:
        'https://images.unsplash.com/photo-1523038793606-2fd28f837a85?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=919b76f4229e41416653aeb10e84e94a&auto=format&fit=crop&w=334&q=80',
    },
    {
      source:
        'https://images.unsplash.com/photo-1516832970803-325be7a92aa5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=93d7ac9abad6167aecb49ebd67fd5b6d&auto=format&fit=crop&w=751&q=80',
    },
    {
      source:
        'https://images.unsplash.com/photo-1526938972776-11558ad4de30?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=973795a277e861265b0fabbf4a96afe2&auto=format&fit=crop&w=750&q=80',
    },
    {
      source:
        'https://images.unsplash.com/photo-1464550838636-1a3496df938b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f22dbf6c13ea7c21e803aa721437b691&auto=format&fit=crop&w=888&q=80',
    },
  ],
  showNumOfRemainingPhotos: true,
};

export default function ReviewReportRequests() {
  const [activeSideBar, setActiveSideBar] = useState(null);
  return (
    <>
      <Helmet>
        <title> {t('ReviewReportRequestsPageTitle')} </title>
      </Helmet>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            {t('ReviewAccidentReportsHeading')}
          </Typography>
        </Stack>
        <div
          style={{
            display: 'flex',
            gap: 20,
          }}
        >
          <SideBar data={[{ user: request.initiator }]} onClick={() => {}} renderIconsSection={() => null} />
          <div
            style={{
              flexGrow: 1,
              height: '75vh',
              overflow: 'hidden',
              overflowY: 'auto',
              paddingLeft: 20,
            }}
          >
            <Typography variant="h6" gutterBottom>
              {t('carAccidentLocation')}
            </Typography>
            <div
              style={{
                width: '100%',
                height: 300,
                borderRadius: 20,
                margin: '20px 0',
                marginBottom: 40,
              }}
            >
              <MyMapComponent
                {...{ lat: 31.901251, lng: 35.859108 }}
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAWjLExlTVTKhgrMa5lf6IgQ0euNesoyvs"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </div>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">{t('selectAccidentSide')}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={0}
                label={t('selectAccidentSide')}
                onChange={() => console.log('changed')}
              >
                <MenuItem value={0}>{t('sideWithNumber')}&nbsp;1</MenuItem>
                <MenuItem value={1}>{t('sideWithNumber')}&nbsp;2</MenuItem>
              </Select>
            </FormControl>
            <div
              style={{
                marginTop: 40,
              }}
            >
              <Accordion
                style={{
                  border: '1px solid rgba(0,0,0,0.1)',
                }}
              >
                <AccordionSummary
                  expandIcon={<Iconify icon="iconamoon:arrow-down-2-fill" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                    }}
                  >
                    {t('carAccidentSideGeneralInfo')}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ReactPhotoCollage {...setting} />
                </AccordionDetails>
              </Accordion>
              <Accordion
                style={{
                  border: '1px solid rgba(0,0,0,0.1)',
                }}
              >
                <AccordionSummary
                  expandIcon={<Iconify icon="iconamoon:arrow-down-2-fill" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                    }}
                  >
                    {t('placesOfCarHit')}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      width: 200,
                      height: 371,
                      position: 'relative',
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        position: 'absolute',
                        top: '5%',
                        left: '5%',
                        borderRadius: '50%',
                        backgroundColor: 'blue',
                        opacity: 0.5,
                      }}
                    />
                    <img
                      src="/assets/images/carTopView.png"
                      alt="carTopView"
                      style={{
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion
                style={{
                  border: '1px solid rgba(0,0,0,0.1)',
                }}
              >
                <AccordionSummary
                  expandIcon={<Iconify icon="iconamoon:arrow-down-2-fill" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                    }}
                  >
                    {t('pictureOfCar')}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ReactPhotoCollage {...setting} />
                </AccordionDetails>
              </Accordion>
              <Accordion
                style={{
                  border: '1px solid rgba(0,0,0,0.1)',
                }}
              >
                <AccordionSummary
                  expandIcon={<Iconify icon="iconamoon:arrow-down-2-fill" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                    }}
                  >
                    {t('sideOfCarAccidentNotes')}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    style={{
                      fontWeight: 'bold',
                      marginBottom: 10,
                    }}
                  >
                    {t('driverNotes')}
                  </Typography>
                  <Typography
                    style={{
                      paddingRight: 20,
                    }}
                  >
                    {'sadopksapkposdak'}
                  </Typography>
                  <Typography
                    style={{
                      fontWeight: 'bold',
                      margin: '10px 0',
                    }}
                  >
                    {t('sssasassas')}
                  </Typography>
                  <FormControlLabel control={<Checkbox defaultChecked />} label={t('isAccidentCausedByThisSide')} />
                </AccordionDetails>
              </Accordion>
            </div>
            <div
              style={{
                display: 'flex',
                paddingBottom: 20,
                paddingTop: 20,
                justifyContent: 'center',
                gap: 10,
              }}
            >
              <Button
                variant="contained"
                style={{
                  backgroundColor: '#4caf50',
                  color: '#fff',
                }}
              >
                {t('acceptTheAccidentReport')}
              </Button>
              <Button
                variant="contained"
                style={{
                  backgroundColor: '#f44336',
                  color: '#fff',
                }}
              >
                {t('declineTheAccidentReport')}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
