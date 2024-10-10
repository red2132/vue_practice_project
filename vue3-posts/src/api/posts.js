// axios로 데이터 조회 예정
const posts = [
	{ id: 1, title: '제목1', content: '내용1', createdAt: '2024-10-11' },
	{ id: 2, title: '제목2', content: '내용2', createdAt: '2024-10-12' },
	{ id: 3, title: '제목3', content: '내용3', createdAt: '2024-10-13' },
	{ id: 4, title: '제목4', content: '내용4', createdAt: '2024-10-14' },
	{ id: 5, title: '제목5', content: '내용5', createdAt: '2024-10-15' },
];

export default function getPosts() {
	return posts;
}
