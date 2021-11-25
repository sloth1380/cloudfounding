import { Request, Response } from 'express';
import { ProjectList } from '../types/projectsType';
import { getRepository } from 'typeorm';

/**
 * Project一覧取得
 * @param req 
 * @param res 
 * @returns 
 */
export const getList = async function(req: Request, res: Response) {

    console.log(req.query);
    const lists: ProjectList = [];
    lists.push({
        projectId: "111",
        imageUrl:"/assets/thumnail.jpeg",
        title: "たいとる",
        body: ""
    });

    return res.json({
        message: '',
        body: lists
    });
}

/**
 * Projectsの詳細取得
 * @param req 
 * @param res 
 */
export const getOne = async function(req: Request, res: Response) {
    //const projectId = req.projects.id;

    //const project =  await getRepository()
}