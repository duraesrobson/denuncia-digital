import React from 'react';
import { FlatList, View } from 'react-native';
import DestaqueCard from './DestaqueCard';

const pegarMaisFrequente = (contagem) => {
  return Object.entries(contagem).sort((a, b) => b[1] - a[1])[0]; 
};

const ResumoCardsSection = ({ faixaEtariaData, tipoData, plataformaData }) => {
  const cards = [];

  if (Object.keys(plataformaData).length) {
    const [nome, total] = pegarMaisFrequente(plataformaData);
    cards.push({ titulo: 'Plataforma com mais denúncias', nome, total });
  }

  if (Object.keys(tipoData).length) {
    const [nome, total] = pegarMaisFrequente(tipoData);
    cards.push({ titulo: 'Tipo de denúncia mais comum', nome, total });
  }

  if (Object.keys(faixaEtariaData).length) {
    const [nome, total] = pegarMaisFrequente(faixaEtariaData);
    const nomeComAnos = `${nome} anos`;
    cards.push({ titulo: 'Faixa etária\nmais afetada', nome: nomeComAnos, total });
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
      />
    </View>
  );
};

export default ResumoCardsSection;
