import { PR_List } from './pages/special/PR_List';
import { MantineProvider, Tabs } from '@mantine/core';
//더미데이터
const profiles = [
  {
      name: '유저1',
      age: 30,
      certs: ['정처기', 'SQLD', 'OCP'],
      history: [
          {
              projectName: '1번플젝',
              period: '2024.05.01 ~ 2024.07.01',
              technologies: ['React', 'Node.js'],
              role: ['Frontend', 'PL']
          },
          {
              projectName: '2번플젝',
              period: '2024.07.01 ~ 2024.09.01',
              technologies: ['Vue.js'],
              role: ['Backend']
          }
      ]
  },
  {
      name: '유저2',
      age: 28,
      certs: ['SQLD'],
      history: []
  }
];

function App() {

  return (
    <>
      <MantineProvider >
        <div>
          <Tabs defaultValue="all_pr">

            <Tabs.List>
              <Tabs.Tab value="all_pr">전체</Tabs.Tab>
              <Tabs.Tab value="hot_pr">추천신입</Tabs.Tab>
              <Tabs.Tab value="overseas">신입</Tabs.Tab>
              <Tabs.Tab value="overseas">경력</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="all_pr">
              <div></div>
            </Tabs.Panel>

            <Tabs.Panel value="hot_pr">
              <PR_List profiles={profiles} />
            </Tabs.Panel>

          </Tabs>
      </div>

      </MantineProvider>
    </>
  )
}

export default App
