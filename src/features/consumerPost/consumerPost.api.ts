import { RESTDataSource } from '@apollo/datasource-rest';
import { ConsumerPost } from './consumerPost.interfaces';

export class ConsumerPostApi extends RESTDataSource {
    override baseURL = process.env.URL_CONSUMER_INT + "/";
    protected override throwIfResponseIsError(options): Promise<void> {
        console.log('consumerPostApi throwIfResponseIsError: ', options);
        return;
    }

    async getConsumerPost(): Promise<ConsumerPost> {
        return this.get<ConsumerPost>('');
    }
}