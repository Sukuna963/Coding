/*
*   File: rounded_percentage.c
*   Author: Leonardo
*/
#include <stdio.h>
#include <stdlib.h>

#define MAX_SCORE 100000;

int main(int argc, char** argv)
{
    int score = 150840;
    float percent = (float)score / MAX_SCORE
    
    printf("Score: %.0f", percent * 100);
    
    return (EXIT_SUCCESS);
}