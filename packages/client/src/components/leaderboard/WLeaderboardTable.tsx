import { Avatar, Col, Row, Table } from 'antd'
import { ILeaderboardTable } from '../../types/leaderboard.types'
import { RESOURCES } from '../../constants/swagger.api'

export const WLeaderboardTable = (props: ILeaderboardTable) => {
  const columns = [
    {
      title: 'position',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (avatar: string) => <Avatar size={40} src={RESOURCES + `${avatar}`} />,
    },
    {
      title: 'login',
      dataIndex: 'login',
      key: 'login',
    },
    {
      title: 'points',
      dataIndex: 'points',
      key: 'points',
    },
  ]

  return (
    <>
      <Row>
        <Col span={12}>
          <Table
            rowKey={record => record.id}
            dataSource={props.users}
            columns={columns}
            pagination={false}
            onRow={record => ({
              style: {
                background: record.id == props.selectId ? '#f6ffed' : 'default',
              },
            })}
          />
        </Col>
      </Row>
    </>
  )
}
