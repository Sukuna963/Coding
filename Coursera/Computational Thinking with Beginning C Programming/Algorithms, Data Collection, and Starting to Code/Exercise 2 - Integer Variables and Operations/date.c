/*
*   File: date.c
*   Author: Leonardo
*/

#include <stdio.h>
#include <stdlib.h>

int main(int argc, char** argv)
{
    int oldAge = 1962;
    int age = 2022 - oldAge;

    printf("Your age is: %d\n", age);

    return(EXIT_SUCCESS);
}