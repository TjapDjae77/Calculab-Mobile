import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from './Header';
import ProgressBar from './ProgressBar';
import MaterialInput from './MaterialInput';
import FunctionMachine from './FunctionMachine';
import OutputComponent from './OutputComponent';
import ListMaterials from './ListMaterials';
import InputFunction from './InputFunction';
import Recipe from './Recipe';
import PopupModal from './PopupModal';
import ScorePopup from './ScorePopup';
import GoBackPopup from './GoBackPopup';
import { COLORS } from '../constants/theme';

interface LevelScreenProps {
  levelNumber: number;
  levelTitle: string;
}

const LevelScreen: React.FC<LevelScreenProps> = ({ levelNumber, levelTitle }) => {
  const [lives, setLives] = useState(3);
  const [progress, setProgress] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [showScorePopup, setShowScorePopup] = useState(false);
  const [showGoBackPopup, setShowGoBackPopup] = useState(false);
  const [score, setScore] = useState(0);

  const navigation = useNavigation();

  const handleGoBack = () => {
    setShowGoBackPopup(true);
  };

  const handleConfirmGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/Conveyor_Machine.svg')}
        style={styles.background}
        resizeMode="contain"
      >
        <Header levelTitle={levelTitle} lives={lives} onGoBack={handleGoBack} />
        <ProgressBar progress={progress} />
        <View style={styles.content}>
          <MaterialInput />
          <FunctionMachine />
          <OutputComponent />
        </View>
        <View style={styles.footer}>
          <ListMaterials />
          <InputFunction />
          <Recipe />
        </View>
      </ImageBackground>
      <PopupModal
        visible={showPopup}
        onClose={() => setShowPopup(false)}
        title="Popup Title"
        message="Popup Message"
      />
      <ScorePopup
        visible={showScorePopup}
        onClose={() => setShowScorePopup(false)}
        score={score}
      />
      <GoBackPopup
        visible={showGoBackPopup}
        onCancel={() => setShowGoBackPopup(false)}
        onConfirm={handleConfirmGoBack}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  background: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 16,
    marginBottom: 20,
  },
});

export default LevelScreen;

