import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { COLORS } from 'app/styles/global';
import { PieChart } from 'react-native-svg-charts';
import { G, Text as SvgText } from 'react-native-svg';
import ResumoCards from '@components/ResumoCards';

export default function Dashboard() {
  const [faixaEtariaData, setFaixaEtariaData] = useState({});
  const [tipoData, setTipoData] = useState({});
  const [plataformaData, setPlataformaData] = useState({});

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'denuncias'), (snapshot) => {
      const faixaContagem = {};
      const tipoContagem = {};
      const plataformaContagem = {};

      snapshot.forEach(doc => {
        const data = doc.data();
        if (data.faixaEtaria) faixaContagem[data.faixaEtaria] = (faixaContagem[data.faixaEtaria] || 0) + 1;
        if (data.tipo) tipoContagem[data.tipo] = (tipoContagem[data.tipo] || 0) + 1;
        if (data.plataforma) plataformaContagem[data.plataforma] = (plataformaContagem[data.plataforma] || 0) + 1;
      });

      setFaixaEtariaData(faixaContagem);
      setTipoData(tipoContagem);
      setPlataformaData(plataformaContagem);
    });

    return () => unsubscribe();
  }, []);

  const preparePieData = (dataObject) => {
    const colors = [COLORS.blue, COLORS.orange, '#7D5FFF', '#2ED573', '#E67E22', '#B33771', '#70A1FF', COLORS.light,];
    return Object.keys(dataObject).map((key, index) => ({
      key,
      value: dataObject[key],
      svg: { fill: colors[index % colors.length] },
      arc: { outerRadius: '100%', padAngle: 0.03 },
      label: key,
    }));
  };

  const Labels = ({ slices }) => {
    const total = slices.reduce((sum, s) => sum + s.data.value, 0);
    return slices.map((slice, index) => {
      const { pieCentroid, data } = slice;
      const percentage = ((data.value / total) * 100).toFixed(0);
      return (
        <G key={index}>
          <SvgText
            x={pieCentroid[0]}
            y={pieCentroid[1]}
            fill={COLORS.darkPurple}
            textAnchor={'middle'}
            alignmentBaseline={'middle'}
            fontSize={18}
            stroke="black"
            strokeWidth={0.2}
          >
            {`${percentage}%`}
          </SvgText>
        </G>
      );
    });
  };

  const renderPieChart = (title, dataObject) => {
    const pieData = preparePieData(dataObject);
    if (pieData.length === 0) return <Text style={{ textAlign: 'center', marginVertical: 10 }}>Sem dados para "{title}".</Text>;

    return (
      <View style={{ marginBottom: 30, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.h1}>{title}</Text>
        <View style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%', // Garante que o container ocupe a largura inteira
          gap: 20, // Adiciona espaço entre o gráfico e as legendas
          paddingHorizontal: 10 // Garante algum padding para não ficar muito colado nas bordas
        }}>
          {/* Gráfico PieChart */}
          <PieChart
            style={{ height: 300, width: 300 }} // Ajuste para garantir que o gráfico seja mais centralizado
            data={pieData}
            outerRadius={'95%'}
          >
            <Labels />
          </PieChart>

          {/* Legendas */}
          <View style={styles.legendContainer}>
            {Object.entries(dataObject).map(([label, count], index) => {
              const legendLabel = title === 'Denúncias por Faixa Etária' ? `${label} anos` : label;
              return (
                <View key={index} style={styles.legendItem}>
                  <View style={[styles.colorBox, { backgroundColor: pieData[index].svg.fill }]} />
                  <Text style={styles.legendText}>{legendLabel}: {count}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <View>
            <Image
              style={styles.bgImg}
              source={require('@assets/images/squares-background.png')}
            />
            <Text style={styles.titulo}>
              Dashboard de Monitoramento
            </Text>
            <Text style={styles.descricaoHeader}>
              Visualização em tempo real das violações de direitos humanos no ambiente digital reportadas no aplicativo "Direito Digital".
            </Text>
          </View>
        </View>
        <View style={styles.mainContainer}>

          <View style={styles.destaqueCardContainer}>
            <Text style={styles.h1}>
            Resumo das Denúncias
            </Text>
            <ResumoCards
              faixaEtariaData={faixaEtariaData}
              tipoData={tipoData}
              plataformaData={plataformaData}
            />
          </View>
          {renderPieChart('Denúncias por Faixa Etária', faixaEtariaData)}
          {renderPieChart('Tipos de Violação', tipoData)}
          {renderPieChart('Plataformas Reportadas', plataformaData)}
          <View style={styles.apoioContainer}>

            <Text style={styles.h1}>
              Relação com ODS 16 - Paz, Justiça e Instituições Eficazes
            </Text>

            <View style={styles.apoioTextContainer}>
              <Text style={styles.apoioTitulo}>
                Este dashboard contribui diretamente para o ODS 16 das Nações Unidas ao:
              </Text>
              <Text style={styles.h3}>
                - Dar visibilidade às violações: Expõe problemas frequentemente invisibilizados no ambiente digital {`\n`} {`\n`}
                - Promover justiça: Facilita a identificação de padrões de violação que podem ser combatidos por autoridades {`\n`} {`\n`}
                - Fortalecer instituições: Fornece dados que podem ser utilizados para elaboração de políticas públicas {`\n`} {`\n`}
                - Garantir acesso à informação: Democratiza o conhecimento sobre direitos digitais para todos
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: COLORS.darkPurple,
    position: 'relative',
    height: 300, // Ajuste conforme necessário
  },
  mainContainer: {
    backgroundColor: COLORS.light,
    minHeight: 400,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  apoioContainer: {
    marginTop: 30,
  },
  apoioTextContainer:{
    borderWidth: 2,
    width: '85%',
    alignSelf:'center',
    borderColor: COLORS.darkPurple,
    borderRadius: 12,
    marginBottom: 20
  },
  apoioTitulo: {
    borderRadius:10,
    marginBottom:10,
    backgroundColor: COLORS.blue,
    color: COLORS.darkPurple,
    padding:10,
    fontSize:22,
    fontFamily: 'Rajdhani-Bold',
    textAlign: 'center',
  },
  titulo: {
    fontSize: 25,
    color: COLORS.darkPurple,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  bgImg: {
    position: 'absolute',
    width: 600,
    height: 600,
    top: -180,
    left: -30,
    resizeMode: 'cover',
    opacity: 0.05,
  },
  titulo: {
    fontSize: 45,
    color: COLORS.orange,
    lineHeight: 40,
    width: 400,
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'Rajdhani-Bold',
    padding: 35,
    zIndex: 2,
  },
  descricaoHeader: {
    fontSize: 20,
    marginTop: -25,
    textAlign: 'center',
    color: COLORS.light,
    fontFamily: 'Rajdhani-Regular',
    zIndex: 2,
  },
  h1: {
    fontFamily: 'Rajdhani-Bold',
    color: COLORS.orange,
    lineHeight: 40,
    margin: 13,
    marginTop: 50,
    width: 300,
    fontSize: 35,
    alignSelf: 'center',
    textAlign: 'center'
  },
  h3: {
    fontFamily: 'Rajdhani-SemiBold',
    fontSize: 18,
    textAlign: 'left',
    width: 290,
    alignSelf: 'center',
    marginBottom: 5
  },
  descricao: {
    fontSize: 20,
    color: COLORS.orange,
    fontWeight: 'regular',
    marginBottom: 10,
    textAlign: 'center'
  },
  destaqueCardContainer: {
    // backgroundColor: '#151123',
    width: '100%',
    marginTop: 10
  },
  chartContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  chartRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  legendContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  colorBox: {
    width: 16,
    height: 16,
    marginRight: 8,
    borderRadius: 3,
  },
  legendText: {
    fontSize: 18,
    fontFamily: 'Rajdhani-SemiBold',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: COLORS.darkPurple,
  },
});
