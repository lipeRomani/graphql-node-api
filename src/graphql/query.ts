import { userQuerys } from './resources/user/user.schema';
import { postQueries } from './resources/post/post.schema';
import { commentQueries } from './resources/comment/comment.schema';

const Query = `
    type Query {
        ${postQueries}
        ${userQuerys}
        ${commentQueries}
    }
`;

export {
    Query
}
