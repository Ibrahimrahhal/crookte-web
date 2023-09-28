import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link, Divider, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Iconify from '../../../components/iconify';
import t from '../../../utils/i18n';
import { useLoginMutation } from '../../../store/apis/auth';

export default function LoginForm() {
  const navigate = useNavigate();
  const [login, loginMutation] = useLoginMutation();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    if (loginMutation.data) {
      dispatch(login(loginMutation.data));
      navigate('/dashboard/app');
    }
  }, [loginMutation.data]);
  const handleClick = async () => {
    await login({ phoneNumber, password });
  };

  return (
    <>
      <Stack spacing={3}>
        <TextField
          name="phone"
          label={t('phoneNumber')}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <TextField
          name="password"
          label={t('password')}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Divider sx={{ my: 3 }} />

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        loading={loginMutation.isLoading}
        disabled={loginMutation.isLoading || !phoneNumber || !password}
        variant="contained"
        onClick={handleClick}
      >
        {t('login')}
      </LoadingButton>
    </>
  );
}
