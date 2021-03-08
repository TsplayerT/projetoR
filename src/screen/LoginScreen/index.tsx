import React, { useRef } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import { StackScreenProps } from '@react-navigation/stack';

// futuramente realziar estilização por meio de componentes
const TextField = styled.input`
  padding: 5px 5px;
  border: 1px solid #333;
  outline: 0;
  margin-top: 10px;
  min-width: 200px;
  border-radius: 5px;
`;

const Button = styled.button`
  margin-top: 5px;
  padding: 5px 80px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Feed: { sort: 'latest' | 'top' } | undefined;
};

type Props = StackScreenProps<RootStackParamList, 'Profile'>;

export const LoginScreen: React.FC<Props> = ({ navigation }: Props) => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const userValidate = (event: React.FormEvent) => {
    event.preventDefault();
    const username = usernameRef.current;
    const password = passwordRef.current;

    // futuramente trocar etapa de validação para outro modulo
    if (username?.value === 'admin' && password?.value === 'admin') {
      navigation.navigate('Home');
    } else {
      alert('acesso negado');
    }
  };

  return (
    <View>
      <Wrapper>
        <Text>Olá, seja bem-vindo ao projetoR</Text>
        <Form onSubmit={userValidate} >
          <TextField ref={usernameRef} placeholder="username" type="text" />
          <TextField ref={passwordRef} placeholder="password" type="password" />
          <Button>Login</Button>
        </Form>
      </Wrapper>
    </View>
  );
};