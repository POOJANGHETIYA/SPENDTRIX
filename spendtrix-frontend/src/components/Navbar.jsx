import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Group, Button } from '@mantine/core';
import { useAuth } from '../hooks/useAuth';

function Navbar() {
  const user = useAuth();

  return (
    <Header height={60} mb={120}>
      <Container>
        <Group position="apart">
          <Link to="/">SpendTrix</Link>
          <Group>
            {user ? (
              <>
                <Link to="/add-expense">
                  <Button variant="light">Add Expense</Button>
                </Link>
                <Link to="/reports">
                  <Button variant="light">Reports</Button>
                </Link>
                <Button onClick={() => supabase.auth.signOut()}>Logout</Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="light">Login</Button>
                </Link>
                <Link to="/register">
                  <Button variant="light">Register</Button>
                </Link>
              </>
            )}
          </Group>
        </Group>
      </Container>
    </Header>
  );
}

export default Navbar;