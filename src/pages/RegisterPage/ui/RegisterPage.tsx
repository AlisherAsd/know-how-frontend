import { ROUTES } from "@/app/providers/router/config";
import { Container, Box, TextField, Button, Typography, Paper, Divider, Link } from "@mui/material";

export default function RegisterPage() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          px: 5,
          py: 10,
          pb: 4,
          width: "100%",
          borderRadius: 7,
        }}
      >
        <Typography variant="h5" component="h1" textAlign="center" gutterBottom fontWeight={600}>
          Добро пожаловать в KnowHow!
        </Typography>

        <Typography variant="body2" textAlign="center" color="text.secondary" mb={2}>
          Создайте новый аккаунт
        </Typography>

        <Box component="form">
          <TextField fullWidth label="Email" type="email" margin="normal" required />
          <TextField fullWidth label="Имя пользователя" type="text" margin="normal" required />
          <TextField fullWidth label="Пароль" type="password" margin="normal" required />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            size="large"
            sx={{ mt: 3, mb: 2, py: 1.5, borderRadius: 4 }}
          >
            Зарегистрироваться
          </Button>

          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" color="text.secondary">
              или
            </Typography>
          </Divider>

          <Box textAlign="center">
            <Typography variant="body2" color="text.secondary">
              Уже есть аккаунт?{" "}
              <Link href={ROUTES.AUTH} underline="hover" fontWeight={600}>
                Войти
              </Link>
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
