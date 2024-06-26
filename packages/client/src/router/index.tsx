import { Route, Routes } from 'react-router-dom'
import { PageMain } from '../layout/pages/main/pageMain'
import { PageNotFound } from '../layout/pages/page404/page404'
import { PageLogin } from '../layout/pages/login/pageLogin'
import { PageSignUp } from '../layout/pages/signUp/pageSignUp'
import { PageProfile } from '../layout/pages/pageProfile/pageProfile'
import { PageGame } from '../layout/pages/game/pageGame'
import { PageLeaderboard } from '../layout/pages/leaderboard/pageLeaderboard'
import { PageForum } from '../layout/pages/forum/pageForum'
import { PageForumTopic } from '../layout/pages/forum/pageForumTopic'
import { Error500 } from '../layout/pages/page500/page500'

export const usePagesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PageMain />} />
      <Route path="/login" element={<PageLogin />} />
      <Route path="/sign-up" element={<PageSignUp />} />
      <Route path="/profile" element={<PageProfile />} />
      <Route path="/play" element={<PageGame />} />
      <Route path="/leaderboard" element={<PageLeaderboard />} />
      <Route path="/error500" element={<Error500 />} />
      <Route path="/forum">
        <Route index element={<PageForum />} />
        <Route path=":id" element={<PageForumTopic />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}
