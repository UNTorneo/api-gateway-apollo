import { RESTDataSource, RequestOptions } from "@apollo/datasource-rest";
import { FetcherResponse } from "@apollo/utils.fetcher";
import { RequestResponse } from "../../core/interfaces/base-interfaces";
import { Message } from "./message/message.interfaces";

export class ChatApi extends RESTDataSource {
  override baseURL = process.env.URL_MS_CHATS;
  protected override throwIfResponseIsError(options): Promise<void> {
    console.log('ChatApi throwIfResponseIsError: ', options)
    return;
  }

  async getMessages(tournamentId: String): Promise<Message[]> {
    try {
      const data = await this.get<Message[]>(`/messages/${tournamentId}`)
      return data
    } catch (error) {
      
    }
  }

}