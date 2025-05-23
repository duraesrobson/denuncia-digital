import React from 'react';
import { FlatList, View } from 'react-native';
import DestaqueCard from './DestaqueCard';

const pegarMaisFrequente = (contagem) => {
  return Object.entries(contagem).sort((a, b) => b[1] - a[1])[0]; 
};

const ResumoCards = ({ faixaEtariaData, tipoData, plataformaData, impactoData }) => {
  const cards = [];

  if (Object.keys(plataformaData).length) {
    const [nome, total] = pegarMaisFrequente(plataformaData);
    cards.push({ titulo: 'Plataforma com mais denúncias', nome, total });
  }

  if (Object.keys(tipoData).length) {
    const [nome, total] = pegarMaisFrequente(tipoData);
    cards.push({ titulo: 'Tipo de denúncia\nmais comum', nome, total });
  }

  if (Object.keys(faixaEtariaData).length) {
    const [nome, total] = pegarMaisFrequente(faixaEtariaData);
    cards.push({ titulo: 'Faixa etária\nmais afetada', nome, total });
  }

  if (Object.keys(impactoData).length) {
    const [nome, total] = pegarMaisFrequente(impactoData);
    cards.push({ titulo: 'Impacto mais causado', nome, total });
  }

  return (
    <View style={{ marginBottom: 30 }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={cards}
        keyExtractor={(item) => item.titulo}
        renderItem={({ item }) => (
          <DestaqueCard titulo={item.titulo} nome={item.nome} total={item.total} />
        )}
        contentContainerStyle={{ 
          paddingHorizontal: 10,
        }}
      />
    </View>
  );
};

export default ResumoCards;
