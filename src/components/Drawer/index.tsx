import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  faCircleInfo,
  faWandMagicSparkles,
  faPersonRunning,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';
import Tab from './tab';
import logo from '../../images/logo.png';

const DrawerWrapper = styled.div`
  width: 140px;
  padding: 36px;
  background: #230640;
  animation: 2s;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  height: 100%;
`;
const TabGroup = styled.div`
  flex: 1;
  margin-top: 2rem;
`;

export const DRAWER_WIDTH = '140px';

export default function Drawer() {
  const { pathname, push } = useRouter();

  let selectedTab = 0;
  if (pathname.includes('/simulation')) {
    selectedTab = 3
  } else if (pathname.includes('/tryit')) {
    selectedTab = 2;
  } else if (pathname.includes('/about')) {
    selectedTab = 1;
  }
  return (
    <DrawerWrapper>
      <Image
        className="pt-3 pb-3"
        width={68}
        src={logo}
        alt="Food Rescue Logo"
      />
      <TabGroup>
        {/* <Tab
          key="tab-0"
          index={0}
          icon={faChartLine}
          selected={selectedTab === 0}
          onClick={() => push('/')}
          text="Dashboard"
        />
        <Tab
          key="tab-1"
          index={0}
          icon={faCircleInfo}
          selected={selectedTab === 1}
          onClick={() => push('/about')}
          text="About the Model"
        /> */}
        <Tab
          key="tab-2"
          index={1}
          icon={faWandMagicSparkles}
          selected={selectedTab === 2}
          onClick={() => push('/tryit')}
          text="Try it out"
        />
        {/* <Tab
          key="tab-3"
          index={2}
          icon={faPersonRunning}
          selected={selectedTab === 3}
          onClick={() => push('/simulation')}
          text="Simulate"
        /> */}
      </TabGroup>
    </DrawerWrapper>
  );
}
