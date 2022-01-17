import { Header } from "../header/header";
import ProfileUser from "../../components/ProfileUser/ProfileUser";


export function ProfileUserCon(){

  return(
      <>
          <Header />
          <ProfileUser 
              user={
                {
                name: 'Вася Пупкин',
                age: 33,
                avatar: {
                  file: {
                    id: 1,
                    name: '123.jpg',
                    path: '/files/1.jpg'
                  }
                },
                files: [
                  {
                    id: 1,
                    name: '123.jpg',
                    path: '/files/1.jpg'
                  },
                  {
                    id: 2,
                    name: '122.jpg',
                    path: '/files/2.jpg'
                  }],
                addrr: {
                  main: {
                    line1: 'test',
                    line2: 'test',
                    city: 'test',
                    zip: 1234
                  },
                  alt: {
                    line1: 'test',
                    line2: 'test',
                    city: 'test',
                    zip: 1234
                  }
                },
                friends: [
                  {
                    name: 'test',
                    age: 33,
                    avatar: {
                      file: {
                        id: 1,
                        name: '123.jpg',
                        path: '/files/1.jpg'
                      }
                    },
                    files: [
                      {
                        id: 1,
                        name: '123.jpg',
                        path: '/files/1.jpg'
                      },
                      {
                        id: 1,
                        name: '123.jpg',
                        path: '/files/1.jpg'
                      }],
                    addrr: {
                      main: {
                        line1: 'test',
                        line2: 'test',
                        city: 'test',
                        zip: 1234
                      },
                      alt: {
                        line1: 'test',
                        line2: 'test',
                        city: 'test',
                        zip: 1234
                      }
                    }
                  }
                ]
                }}
          />
      </>
  )

}