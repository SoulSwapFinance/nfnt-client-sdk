import { NextPage } from 'next'
import Modal from '../../src/components/Modal'

const Trigger = <button>Trigger</button>

const Index: NextPage = () => {
  return (
    <Modal trigger={Trigger} title="Title">
      Content
    </Modal>
  )
}

export default Index
