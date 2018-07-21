import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MemberStatus } from '../entities/MemberStatus';

@Injectable()
export class MemberStatusService {
    url:string = "http://localhost:5000/api/GymMember";

    constructor(private http: HttpClient) { }

    public getAll() {
        return this.http.get<MemberStatus[]>(this.url);
    }

    public get(id: number) {
        return this.http.get<MemberStatus[]>(this.url + "/" + id);
    }

    public update(status: MemberStatus) {
        return this.http.put(this.url, status);
    }

    public insert(status: MemberStatus) {
        return this.http.post(this.url, status);
    }

    public delete(id: number) {
        return this.http.delete(this.url + id);
    }
}